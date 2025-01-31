import { MongoDataSource } from "../../application/db/MongoConfig";
import { CrudOperations } from "./common/CrudOperations";
import { Repository } from "typeorm/repository/Repository";
import { DataSource } from "typeorm";

export class MongoRepository implements CrudOperations<string> {
  private readonly repository: Repository<any>;

  constructor(entity: any) {
    this.repository = MongoDataSource.getRepository(entity);
  }

  async save(entity: any): Promise<any> {
    return await this.repository.save(entity);
  }

  async list(): Promise<any> {
    return await this.repository.find();
  }

  async findById(uuid: string): Promise<any> {
    return await this.repository.findOneBy({ uuid });
  }

  async update(entity: any, uuid: string): Promise<any> {
    const entityFound = this.repository.findOneBy({ uuid });
    const entitySaved = Object.assign(entityFound, entity);
    return await this.repository.save(entitySaved);
  }

  async delete(uuid: string): Promise<void> {
    await this.repository.delete({ uuid });
  }

  dataSource(): DataSource {
    return MongoDataSource;
  }
}
