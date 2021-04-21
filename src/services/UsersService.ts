import { getCustomRepository, Repository } from "typeorm";

import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

interface IUsersCreate {
  email : string;
}

class UsersService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create({email}: IUsersCreate ): Promise<User> {
    const userExists = await this.usersRepository.findOne({email});

    //se o usuário existir, retornar o usuário dono do email informado ,caso contrário irá criar um
    if(userExists) {
      return userExists;
    }

    const user = this.usersRepository.create({
      email
    });

    await this.usersRepository.save(user);

    return user;
  } 
}

export { UsersService };