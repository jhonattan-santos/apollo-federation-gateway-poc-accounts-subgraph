import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Employee } from './employee.entity';
import { Customer } from './customer.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class Account {
  @Field((type) => ID, { nullable: true })
  id: string;

  @Field((type) => String, { nullable: true })
  name: string;

  @Field((type) => String, { nullable: true })
  agency: string;

  @Field((type) => ID, { nullable: true })
  employeeId: string;

  @Field((type) => String, { nullable: true })
  balance: string;

  @Field((type) => Customer, { nullable: true })
  customer: Customer;

  @Field((type) => Employee, { nullable: true })
  employee: Employee;
  ó;

  @Field((type) => String, { nullable: true })
  creationDate: Date;
}
