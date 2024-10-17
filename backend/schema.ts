import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Calculation {
    operand1: Float!
    operand2: Float!
    operator: String!
    result: Float!
    timestamp: String!
  }

  type Query {
    calculations: [Calculation!]
  }

  type Mutation {
    calculate(operand1: Float!, operand2: Float!, operator: String!): Calculation
  }
`;