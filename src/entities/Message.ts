import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidv4} from "uuid";

import { User } from "./User";


@Entity("messages")
class Message {

  @PrimaryColumn()
  id: string;

  @Column()
  admin_id: string;

  @Column()
  text: string;

  // fazendo a relação entre a tabela de mensagens com a de usuários.
  @JoinColumn({ name: "user_id"} )
  @ManyToOne(() => User)
  user: User;
  
  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuidv4();
    }
  }

}

export { Message };