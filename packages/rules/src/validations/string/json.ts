/*
* indicative
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { skippable } from 'indicative-utils'
import { Validation } from 'indicative-compiler'

import { json } from '../../raw/json'
import { RulesConfig } from '../../Contracts'

/**
 * Ensures the value of field under validation is safe to be parsed
 * using `JSON.parse` method.
 *
 * [source, js]
 * ----
 * const rules = {
 *   payload: 'json'
 * }
 *
 * // or
 * const rules = {
 *   payload: [
 *     rule('json')
 *   ]
 * }
 * ----
 */
const validation: Validation = {
  async: false,

  validate: (data, field, _args, _type, _root, config: RulesConfig) => {
    const fieldValue = data[field]
    return skippable(fieldValue, field, config) || json(fieldValue)
  },
}

export { validation as default }
