/**
*  @license
* Copyright 2021, JsData. All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.

* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* ==========================================================================
*/
import { ArrayType1D } from "../shared/types";
import Series from "./series";

/**
 * Exposes numerous String methods. All methods are applied Element-wise
 */
export default class Str {
    private series: Series
    private values: ArrayType1D

    constructor(series: Series) {
        this.series = series;
        this.values = (series.values as ArrayType1D);
    }

    /**
     * Converts all characters to lowercase.
     * @param options.inplace Boolean indicating whether to perform the operation inplace or not. Defaults to false
    */
    toLowerCase(options: { inplace: boolean } = { inplace: false }): Series | void {
        const { inplace = false } = options;
        const newArr: Array<string | number> = [];
        this.values.map((val) => {
            if (isNaN(val as number) && typeof val != "string") {
                newArr.push(NaN);
            } else {
                newArr.push(`${val}`.toLowerCase());
            }

        });

        if (inplace) {
            this.series.$setValues(newArr as ArrayType1D)
            this.series.print()
        } else {
            const sf = this.series.copy()
            sf.$setValues(newArr as ArrayType1D)
            return sf;
        }

    }

    /**
     * Converts all characters to uppercase.
     * @param options.inplace Boolean indicating whether to perform the operation inplace or not. Defaults to false
    */
    toUpperCase(options: { inplace: boolean } = { inplace: false }): Series | void {
        const { inplace = false } = options;
        const newArr: Array<string | number> = [];
        this.values.map((val) => {
            if (isNaN(val as number) && typeof val != "string") {
                newArr.push(NaN);
            } else {
                newArr.push(`${val}`.toUpperCase());
            }

        });
        if (inplace) {
            this.series.$setValues(newArr as ArrayType1D)
            this.series.print()
        } else {
            const sf = this.series.copy()
            sf.$setValues(newArr as ArrayType1D)
            return sf;

        }
    }

    /**
       * Capitalize first string
       * @param options.inplace Boolean indicating whether to perform the operation inplace or not. Defaults to false
    */
    capitalize(options: { inplace: boolean } = { inplace: false }): Series | void {
        const { inplace = false } = options;
        const newArr: Array<string | number> = [];
        this.values.map((val) => {
            if (isNaN(val as number) && typeof val != "string") {
                newArr.push(NaN);
            } else {
                let firstChar = `${val}`.slice(0, 1);
                let leftChar = `${val}`.slice(1);
                let newStr = `${firstChar.toUpperCase()}${leftChar.toLowerCase()}`;
                newArr.push(newStr);
            }

        });

        if (inplace) {
            this.series.$setValues(newArr as ArrayType1D)
            this.series.print()
        } else {
            const sf = this.series.copy()
            sf.$setValues(newArr as ArrayType1D)
            return sf;
        }

    }

    /**
       * Returns the character at the specified index (position)
       * @param {index} index position of character
       * @param options.inplace Boolean indicating whether to perform the operation inplace or not. Defaults to false
    */
    charAt(index = 0, options: { inplace: boolean } = { inplace: false }): Series | void {
        const { inplace = false } = options;
        const newArr: Array<string | number> = [];
        this.values.map((val) => {
            if (isNaN(val as number) && typeof val != "string") {
                newArr.push(NaN);
            } else {
                newArr.push(`${val}`.charAt(index));
            }
        });
        if (inplace) {
            this.series.$setValues(newArr as ArrayType1D)
            this.series.print()
        } else {
            const sf = this.series.copy()
            sf.$setValues(newArr as ArrayType1D)
            return sf;
        }
    }

    /**
       * Joins two or more strings/arrays. 0 joins from the start
       * @param other string|values to concatenate with.
       * @param position where to concat the string from. O concats from the start, 1 concats from the end
       * @param options.inplace Boolean indicating whether to perform the operation inplace or not. Defaults to false
    */
    concat(other: Array<string> | string, position = 1, options: { inplace: boolean } = { inplace: false }): Series | void {
        const { inplace = false } = options;
        const newArr: Array<string | number> = [];

        if (Array.isArray(other)) {
            for (let i = 0; i < other.length; i++) {
                let leftStr = `${this.values[i]}`;
                let rightStr = `${other[i]}`;
                if (position == 1) {
                    newArr.push(leftStr.concat(rightStr));
                } else {
                    newArr.push(rightStr.concat(leftStr));
                }

            }
        } else {
            this.values.map((val) => {
                if (position == 1) {
                    if (isNaN(val as number) && typeof val != "string") {
                        newArr.push(NaN);
                    } else {
                        newArr.push(`${val}`.concat(`${other}`));
                    }

                } else {
                    if (isNaN(val as number) && typeof val != "string") {
                        newArr.push(NaN);
                    } else {
                        newArr.push(other.concat(`${val}`));
                    }
                }
            });
        }

        if (inplace) {
            this.series.$setValues(newArr as ArrayType1D)
            this.series.print()
        } else {
            const sf = this.series.copy()
            sf.$setValues(newArr as ArrayType1D)
            return sf;
        }

    }


    /**
      * Checks whether a string begins with specified characters
      * @param str String or Character to check against
      * @param options.inplace Boolean indicating whether to perform the operation inplace or not. Defaults to false
    */
    startsWith(str = "", options: { inplace: boolean } = { inplace: false }): Series | void {
        const { inplace = false } = options;
        const newArr: Array<boolean | number> = [];
        this.values.forEach((val) => {
            if (isNaN(val as number) && typeof val != "string") {
                newArr.push(NaN);
            } else {
                newArr.push(`${val}`.startsWith(str));
            }
        });
        if (inplace) {
            this.series.$setValues(newArr as ArrayType1D)
            this.series.print()
        } else {
            const sf = this.series.copy()
            sf.$setValues(newArr as ArrayType1D)
            return sf;
        }
    }

    /**
     * Checks whether a string ends with specified characters
     * @param str String or Character to check against
     * @param options.inplace Boolean indicating whether to perform the operation inplace or not. Defaults to false
     */
    endsWith(str = "", options: { inplace: boolean } = { inplace: false }): Series | void {
        const { inplace = false } = options;
        const newArr: Array<boolean | number> = [];
        this.values.map((val) => {
            if (isNaN(val as number) && typeof val != "string") {
                newArr.push(NaN);
            } else {
                newArr.push(`${val}`.endsWith(str));
            }
        });
        if (inplace) {
            this.series.$setValues(newArr as ArrayType1D)
            this.series.print()
        } else {
            const sf = this.series.copy()
            sf.$setValues(newArr as ArrayType1D)
            return sf;
        }
    }

    /**
       * Checks whether a string contains the specified string/characters
       * @param str String or Character to check against
       * @param options.inplace Boolean indicating whether to perform the operation inplace or not. Defaults to false
    */
    includes(str = "", options: { inplace: boolean } = { inplace: false }): Series | void {
        const { inplace = false } = options;
        const newArr: Array<boolean | number> = [];
        this.values.map((val) => {
            if (isNaN(val as number) && typeof val != "string") {
                newArr.push(NaN);
            } else {
                newArr.push(`${val}`.includes(str));
            }
        });
        if (inplace) {
            this.series.$setValues(newArr as ArrayType1D)
            this.series.print()
        } else {
            const sf = this.series.copy()
            sf.$setValues(newArr as ArrayType1D)
            return sf;
        }
    }

    /**
      * Returns the position of the first found occurrence of a specified value in a string
      * @param str String or Character to check against
      * @param options.inplace Boolean indicating whether to perform the operation inplace or not. Defaults to false
    */
    indexOf(str = "", options: { inplace: boolean } = { inplace: false }): Series | void {
        const { inplace = false } = options;
        const newArr: Array<number> = [];
        this.values.map((val) => {
            if (isNaN(val as number) && typeof val != "string") {
                newArr.push(NaN);
            } else {
                newArr.push(`${val}`.indexOf(str));
            }
        });
        if (inplace) {
            this.series.$setValues(newArr as ArrayType1D)
            this.series.print()
        } else {
            const sf = this.series.copy()
            sf.$setValues(newArr as ArrayType1D)
            return sf;
        }
    }

    /**
     * Returns the position of the last found occurrence of a specified value in a string
     * @param str String or Character to check against
     * @param options.inplace Boolean indicating whether to perform the operation inplace or not. Defaults to false
     */
    lastIndexOf(str = "", options: { inplace: boolean } = { inplace: false }): Series | void {
        const { inplace = false } = options;
        const newArr: Array<string | number> = [];
        this.values.map((val) => {
            if (isNaN(val as number) && typeof val != "string") {
                newArr.push(NaN);
            } else {
                newArr.push(`${val}`.lastIndexOf(str));
            }
        });
        if (inplace) {
            this.series.$setValues(newArr as ArrayType1D)
            this.series.print()
        } else {
            const sf = this.series.copy()
            sf.$setValues(newArr as ArrayType1D)
            return sf;
        }
    }


    /**
      * Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
      * @param searchValue String | Character value to replace
      * @param replaceValue String | Character string to replace with
      * @param options.inplace Boolean indicating whether to perform the operation inplace or not. Defaults to false
    */
    replace(searchValue = "", replaceValue = "", options: { inplace: boolean } = { inplace: false }): Series | void {
        const { inplace = false } = options;
        const newArr: Array<string | number> = [];
        this.values.map((val) => {
            if (isNaN(val as number) && typeof val != "string") {
                newArr.push(NaN);
            } else {
                newArr.push(`${val}`.replace(searchValue, replaceValue));
            }
        });
        if (inplace) {
            this.series.$setValues(newArr as ArrayType1D)
            this.series.print()
        } else {
            const sf = this.series.copy()
            sf.$setValues(newArr as ArrayType1D)
            return sf;
        }
    }

    /**
       * Returns a new string with a specified number of copies of an existing string
       * @param num Number of times to repeat
       * @param options.inplace Boolean indicating whether to perform the operation inplace or not. Defaults to false
    */
    repeat(num = 1, options: { inplace: boolean } = { inplace: false }): Series | void {
        const { inplace = false } = options;
        const newArr: Array<string | number> = [];
        this.values.map((val) => {
            if (isNaN(val as number) && typeof val != "string") {
                newArr.push(NaN);
            } else {
                newArr.push(`${val}`.repeat(num));
            }
        });
        if (inplace) {
            this.series.$setValues(newArr as ArrayType1D)
            this.series.print()
        } else {
            const sf = this.series.copy()
            sf.$setValues(newArr as ArrayType1D)
            return sf;
        }
    }


    /**
       * Searches a string for a specified value, or regular expression, and returns the position of the match
       * @param str String or Character to check against
       * @param options.inplace Boolean indicating whether to perform the operation inplace or not. Defaults to false
    */
    search(str = "", options: { inplace: boolean } = { inplace: false }): Series | void {
        const { inplace = false } = options;
        const newArr: Array<string | number> = [];
        this.values.map((val) => {
            if (isNaN(val as number) && typeof val != "string") {
                newArr.push(NaN);
            } else {
                newArr.push(`${val}`.search(str));
            }
        });
        if (inplace) {
            this.series.$setValues(newArr as ArrayType1D)
            this.series.print()
        } else {
            const sf = this.series.copy()
            sf.$setValues(newArr as ArrayType1D)
            return sf;
        }
    }

    /**
     * Extracts a part of a string and returns a new string
     * @param startIndex index position of start character
     * @param endIndex index position of last character
     * @param options.inplace Boolean indicating whether to perform the operation inplace or not. Defaults to false
     */
    slice(startIndex = 0, endIndex = 1, options: { inplace: boolean } = { inplace: false }): Series | void {
        const { inplace = false } = options;
        const newArr: Array<string | number> = [];
        this.values.map((val) => {
            if (isNaN(val as number) && typeof val != "string") {
                newArr.push(NaN);
            } else {
                newArr.push(`${val}`.slice(startIndex, endIndex));
            }
        });
        if (inplace) {
            this.series.$setValues(newArr as ArrayType1D)
            this.series.print()
        } else {
            const sf = this.series.copy()
            sf.$setValues(newArr as ArrayType1D)
            return sf;
        }
    }

    /**
       * Splits a string into an values of substrings
       * @param splitVal string or character to split at
       * @param options.inplace Boolean indicating whether to perform the operation inplace or not. Defaults to false
    */
    split(splitVal = " ", options: { inplace: boolean } = { inplace: false }): Series | void {
        const { inplace = false } = options;
        const newArr: Array<string | number> = [];
        this.values.map((val) => {
            if (isNaN(val as number) && typeof val != "string") {
                newArr.push(NaN);
            } else {
                newArr.push(`${String(val).split(splitVal)}`);
            }
        });
        if (inplace) {
            this.series.$setValues(newArr as ArrayType1D)
            this.series.print()
        } else {
            const sf = this.series.copy()
            sf.$setValues(newArr as ArrayType1D)
            return sf;
        }
    }

    /**
     * Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
     * @param startIndex index position of start character
     * @param num number of characters to return
     * @param options.inplace Boolean indicating whether to perform the operation inplace or not. Defaults to false
    */
    substr(startIndex = 0, num = 1, options: { inplace: boolean } = { inplace: false }): Series | void {
        const { inplace = false } = options;
        const newArr: Array<string | number> = [];
        this.values.map((val) => {
            if (isNaN(val as number) && typeof val != "string") {
                newArr.push(NaN);
            } else {
                newArr.push(`${String(val).substr(startIndex, num)}`);
            }
        });
        if (inplace) {
            this.series.$setValues(newArr as ArrayType1D)
            this.series.print()
        } else {
            const sf = this.series.copy()
            sf.$setValues(newArr as ArrayType1D)
            return sf;
        }
    }

    /**
    * Extracts the characters from a string, between two specified indices
    * @param startIndex index position of start character
    * @param endIndex index position of last character
    * @param options.inplace Boolean indicating whether to perform the operation inplace or not. Defaults to false
    */
    substring(startIndex = 0, endIndex = 1, options: { inplace: boolean } = { inplace: false }): Series | void {
        const { inplace = false } = options;
        const newArr: Array<string | number> = [];
        this.values.map((val) => {
            if (isNaN(val as number) && typeof val != "string") {
                newArr.push(NaN);
            } else {
                newArr.push(`${String(val).substring(startIndex, endIndex)}`);
            }
        });
        if (inplace) {
            this.series.$setValues(newArr as ArrayType1D)
            this.series.print()
        } else {
            const sf = this.series.copy()
            sf.$setValues(newArr as ArrayType1D)
            return sf;
        }
    }

    /**
      * Removes whitespace from both ends of a string
      * @param options.inplace Boolean indicating whether to perform the operation inplace or not. Defaults to false
      */
    trim(options: { inplace: boolean } = { inplace: false }): Series | void {
        const { inplace = false } = options;
        const newArr: Array<string | number> = [];
        this.values.map((val) => {
            if (isNaN(val as number) && typeof val != "string") {
                newArr.push(NaN);
            } else {
                newArr.push(`${val}`.trim());
            }
        });
        if (inplace) {
            this.series.$setValues(newArr as ArrayType1D)
            this.series.print()
        } else {
            const sf = this.series.copy()
            sf.$setValues(newArr as ArrayType1D)
            return sf;
        }
    }

    /**
      * Joins strings to specified value
      * @param valToJoin string value to join to the values
      * @param joinChar Character to Join with
      * @param options.inplace Boolean indicating whether to perform the operation inplace or not. Defaults to false
      */
    join(valToJoin = "", joinChar = " ", options: { inplace: boolean } = { inplace: false }): Series | void {
        const { inplace = false } = options;
        const newArr: Array<string | number> = [];
        this.values.map((val) => {
            if (isNaN(val as number) && typeof val != "string") {
                newArr.push(NaN);
            } else {
                let leftChar = val;
                let rightChar = valToJoin;
                let new_char = `${leftChar}${joinChar}${rightChar}`;
                newArr.push(new_char);
            }
        });
        if (inplace) {
            this.series.$setValues(newArr as ArrayType1D)
            this.series.print()
        } else {
            const sf = this.series.copy()
            sf.$setValues(newArr as ArrayType1D)
            return sf;
        }
    }

    /**
      * Counts the number of characters in string
      * @param options.inplace Boolean indicating whether to perform the operation inplace or not. Defaults to false
    */
    len(options: { inplace: boolean } = { inplace: false }): Series | void {
        const { inplace = false } = options;
        const newArr: Array<string | number> = [];
        this.values.map((val) => {
            if (isNaN(val as number) && typeof val != "string") {
                newArr.push(NaN);
            } else {
                newArr.push(`${val}`.length);
            }
        });
        if (inplace) {
            this.series.$setValues(newArr as ArrayType1D)
            this.series.print()
        } else {
            const sf = this.series.copy()
            sf.$setValues(newArr as ArrayType1D)
            return sf;
        }
    }

}