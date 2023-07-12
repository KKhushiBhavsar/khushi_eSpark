/*before sending request payload we need to create DTO file to defile how data will
send over the network
*/
export class CreateUserDto {
  id: number;
  name: string;
  age: number;
}
