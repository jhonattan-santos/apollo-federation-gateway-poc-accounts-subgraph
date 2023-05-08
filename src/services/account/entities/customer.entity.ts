import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Account } from './account.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class Customer {
  @Field((type) => ID)
  @Directive('@external')
  id: string;

  @Field((type) => String, { nullable: true })
  @Directive('@external')
  name: string;

  @Field((type) => String, { nullable: true })
  @Directive('@external')
  accountId: string;

  @Field((type) => Account, { nullable: true })
  @Directive('@external')
  account: Account;

  @Field((type) => String, { nullable: true })
  @Directive('@external')
  email: string;

  @Field((type) => String, { nullable: true })
  @Directive('@external')
  jobPosition: string;

  @Field((type) => String, { nullable: true })
  @Directive('@external')
  salary: string;

  @Field((type) => [FamilyMember], { nullable: true })
  @Directive('@external')
  familyMembers: FamilyMember[];

  @Field((type) => String, { nullable: true })
  @Directive('@external')
  birthDate: Date;

  @Field((type) => String, { nullable: true })
  @Directive('@external')
  creationDate: Date;
}

@ObjectType()
@Directive('@key(fields: "id")')
export class FamilyMember {
  @Field((type) => ID)
  @Directive('@external')
  id: string;

  @Field((type) => String, { nullable: true })
  @Directive('@external')
  name: string;
  
  @Field((type) => String, { nullable: true })
  @Directive('@external')
  type: string;
}
