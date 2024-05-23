import Result from "../result.interface";

export function ResponseDto<T>(
 
  data: T | T[],
  total: number = null
): Result<T> {
  if (total || total === 0) {
    return {
 
      payload: { data, total },
    };
  }

  return {  payload: { data } };
}
