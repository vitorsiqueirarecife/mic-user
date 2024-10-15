import { IUser } from 'src/domain/interfaces/user.interface';
import { SUser } from '../db/mongodb/schemas/user.schema';

class UserParse {
  static toSUser(user: IUser): SUser {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    };
  }

  static toIUser(sUser: SUser): IUser {
    return {
      id: sUser.id,
      name: sUser.name,
      email: sUser.email,
      password: sUser.password,
    };
  }
}

export default UserParse;
