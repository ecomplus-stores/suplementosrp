import * as merge from 'lodash.merge'
import query from '@ecomplus/search-engine/src/lib/dsl'

export default (self, term) => {
  const arr = (term || '').split(' ')
  /* const removeChar = (arr) => { 
    if (arr.length === 1) {
      return arr[0].replace(/(es)|s$/g, '')
    }
  } */
  let isTwoWords = false
  const fromTo = (arr) => {
    if (arr.length === 2) {
      isTwoWords = true
      switch(arr[0] + ' ' + arr[1]) {
        case 'promo pack':
          return 'promopack'
      }
    }
    return newArr.join(' ')
  }
  // match name and/or keyword with term
  // https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-multi-match-query.html
  if (term) {
    const sort = query.sort.slice()
    const relevanceSortIndex = sort.findIndex(s => s.ad_relevance)
    sort.splice(relevanceSortIndex, 1)
    self.dsl.sort = sort
  }
  console.log(self)
  const modifiedTerm = fromTo(arr)
  const finalTerm = modifiedTerm || term
  self.mergeFilter({
    multi_match: {
      query: finalTerm,
      type: finalTerm.length > 3 ? 'best_fields' : 'phrase_prefix',
      fields: [
        'name',
        'keywords',
        'skus'
      ]
    }
  }, 'must')
  
  merge(self.dsl, {
    // handle terms suggestion
    // 'did you mean?'
    // https://www.elastic.co/guide/en/elasticsearch/reference/current/search-suggesters.html
    suggest: {
      text: isTwoWords ? term.replace(' ', '').trim() : term,
      words: {
        term: {
          field: 'name'
        }
      }
    }
  })
  return self
}

/**
 * @method
 * @name EcomSearch#setSearchTerm
 * @description Defines term to match with product name
 * and/or keywords on next search request.
 *
 * @param {string} term - Term to be searched
 * @returns {self}
 *
 * @example

// Set new search term
search.setSearchTerm('smartphone')

 * @example

// Set new term and run search request
search.setSearchTerm('notebook').fetch()

 */
