import { knex } from '../server/database.js';
import { Model } from 'objection';
import { Set } from './Set.js';
import { CardSetCards } from './CardSetCards.js';

class Card extends Model {
  static get idColumn() {
    return 'cardId';
  }
  static get tableName() {
    return 'Card';
  }

  static get relationMappings() {
    return {
      //Model.ManyToManyRelation with CardSet
      set: {
        relation: Model.ManyToManyRelation,
        modelClass: Set,

        join: {
          from: 'Card.cardId',
          through: {
            from: 'CardSetCards.cardId',
            to: 'CardSetCards.cardSetId'
          },
          to: 'CardSet.cardSetId'
        }
      },

      //Model.HasManyRelation with CardSetCards
      setRelation: {
        relation: Model.HasManyRelation,
        modelClass: CardSetCards,
        join: {
          from: 'Card.cardId',
          to: 'CardSetCards.cardId'
        }
      }
    };
  }
}

//Model.HasManyRelation with CardSetProgress

export { Card };
