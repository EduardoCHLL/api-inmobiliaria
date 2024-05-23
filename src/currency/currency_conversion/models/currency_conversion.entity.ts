 
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {TypeCurrencyEntity} from '../../type_currency/models/type_currency.entity'
@Entity({ name: "currency_conversion" })
export class CurrencyConversionEntity {
  @PrimaryGeneratedColumn()
  id: number;


  @ManyToOne((type) => TypeCurrencyEntity, (typecurrency) => typecurrency.id)
  currency_origin: TypeCurrencyEntity;

  @ManyToOne((type) => TypeCurrencyEntity, (typecurrency) => typecurrency.id)
  currency_change: TypeCurrencyEntity;
 

  @Column({ type: "varchar" })
  operator: string;

 

  @Column({ type: "numeric" })
  changeValue: number;
 
}
