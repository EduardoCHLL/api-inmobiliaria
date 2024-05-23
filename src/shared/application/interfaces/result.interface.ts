export default interface Result<T> {
 
  payload: {
    data: Partial<T> | Partial<T>[];
    total?: number;
  };
}
