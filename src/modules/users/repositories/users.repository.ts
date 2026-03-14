import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly ormRepository: Repository<UserEntity>,
  ) {}

  async create(data: CreateUserDto): Promise<UserEntity> {
    const user = this.ormRepository.create(data);
    return this.ormRepository.save(user);
  }

  async findAll(): Promise<UserEntity[]> {
    return this.ormRepository.find({
      order: { id: 'ASC' },
    });
  }

  async findById(id: number): Promise<UserEntity | null> {
    return this.ormRepository.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    return this.ormRepository.findOne({ where: { email } });
  }
}