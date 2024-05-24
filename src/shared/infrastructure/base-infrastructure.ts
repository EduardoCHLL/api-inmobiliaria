import { ObjectType, Repository } from "typeorm";
import DatabaseBootstrap from "../../service/databse.boostrap";
import * as _ from "lodash";
import Result from "../application/interfaces/result.interface";
import { ResponseDto } from "../application/interfaces/dtos/response.dto";
 

export abstract class BaseInfrastructure<T> {
  constructor(
    private entity: ObjectType<T>,
    private infrastructureName: string = null
  ) {}

  async update(
    entity: Partial<T>,
    where: object,
    relations: string[] = []
  ): Promise<Result<T>> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository: Repository<T> = dataSource.getRepository(this.entity);
    let recordToUpdate: any = await repository.findOne({
      where
    });

    recordToUpdate = _.merge(recordToUpdate, entity); 
    await repository.save(recordToUpdate);

    return   ResponseDto<T>(recordToUpdate);

    
  }

  async delete(where: object): Promise<Result<T>> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository: Repository<T> = dataSource.getRepository(this.entity);
    let recordToDelete: any = await repository.findOne({
      where,
    });
    recordToDelete = _.merge(recordToDelete, { active: false });
    await repository.save(recordToDelete);

    return ResponseDto<T>(recordToDelete);
  }

  async findOne(
    where: object = {},
    relations: string[] = []
  ): Promise<Result<T>> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository: Repository<T> = dataSource.getRepository(this.entity);
    const data: T = await repository.findOne({ where, relations });

 
    return ResponseDto<T>( data);
  }

  async findAll(
    where: object = {},
    relations: string[] = [],
    order: object = {}
  ): Promise<Result<T>> {
    
    const dataSource = DatabaseBootstrap.dataSource;
    const repository: Repository<T> = dataSource.getRepository(this.entity);
    const _where = Object.assign(where, { active: true });
    const data: T[] = await repository.find({
      where: _where,
      relations,
      order,
    });
    return ResponseDto<T>(  data);
  }

  async insert(entity: T): Promise<Result<T>> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository: Repository<T> = dataSource.getRepository(this.entity);
    const instance = repository.create(entity);
    const data: T = await repository.save(instance);

    return ResponseDto<T>(  data);
  }

  async getPage(
    page: number,
    pageSize: number,
    where: object = {},
    relations: string[] = [],
    order: object = {}
  ): Promise<Result<T>> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository: Repository<T> = dataSource.getRepository(this.entity);
    const [data, total] = await repository.findAndCount({
      where,
      relations,
      order,
      skip: page * pageSize,
      take: pageSize,
    });

    return ResponseDto<T>(  data, total);
  }
}
