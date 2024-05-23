import {TypeCurrencyEntity} from '../../type_currency/models/type_currency.entity'


export class CurrencyConversionModel {
  constructor(
  
    public id: number,
    public currency_origin: TypeCurrencyEntity,
    public currency_change: TypeCurrencyEntity, 
    public operator: string, 
    public changeValue: number, 
    
  ) { }
  }
  