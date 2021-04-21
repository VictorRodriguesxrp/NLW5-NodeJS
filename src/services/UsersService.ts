import { getCustomRepository } from "typeorm";

import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

interface IUsersCreate {
  email : string;
}

class UsersService {
  async create({email}: IUsersCreate ): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const userExists = await usersRepository.findOne({email});

    //se o usuário existir, retornar o usuário dono do email informado ,caso contrário irá criar um
    if(userExists) {
      return userExists;
    }

    const user = usersRepository.create({
      email
    });

    await usersRepository.save(user);

    return user;
  } 
}

export { UsersService };