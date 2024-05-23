import { LocationEntity } from "../../../location/domain/models/location.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "location_type" })
export class TypeLocationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  type_description: string;

  @OneToMany((type) => LocationEntity, (location) => location.typeloc)
  location: LocationEntity[];
}
