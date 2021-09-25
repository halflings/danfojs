"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DATA_TYPES = exports.BASE_CONFIG = void 0;

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
const BASE_CONFIG = {
  tableMaxRow: 10,
  tableMaxColInConsole: 21,
  dtypeTestLim: 7,
  lowMemoryMode: false
};
exports.BASE_CONFIG = BASE_CONFIG;
const DATA_TYPES = ["float32", "int32", "string", "boolean", 'undefined'];
exports.DATA_TYPES = DATA_TYPES;