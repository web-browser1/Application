import { db } from './db';

export const resolvers = {
  Query: {
    calculations: async () => {
      const [rows] = await db.query('SELECT * FROM calculations');
      return rows;
    },
  },
  Mutation: {
    calculate: async (_: any, { operand1, operand2, operator }: any) => {
      let result;
      switch (operator) {
        case '+': result = operand1 + operand2; break;
        case '-': result = operand1 - operand2; break;
        case '*': result = operand1 * operand2; break;
        case '/': result = operand1 / operand2; break;
        default: throw new Error('Invalid operator');
      }

      const timestamp = new Date().toISOString();
      await db.query('INSERT INTO calculations (operand1, operand2, operator, result, timestamp) VALUES (?, ?, ?, ?, ?)', [operand1, operand2, operator, result, timestamp]);

      return { operand1, operand2, operator, result, timestamp };
    }
  }
};