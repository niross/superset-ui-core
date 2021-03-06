"use strict";

exports.__esModule = true;
exports.default = exports.ColumnType = void 0;

/* eslint-disable camelcase */

/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var ColumnType;
/**
 * Column information defined in datasource.
 */

exports.ColumnType = ColumnType;

(function (ColumnType) {
  ColumnType["DOUBLE"] = "DOUBLE";
  ColumnType["FLOAT"] = "FLOAT";
  ColumnType["INT"] = "INT";
  ColumnType["BIGINT"] = "BIGINT";
  ColumnType["LONG"] = "LONG";
  ColumnType["REAL"] = "REAL";
  ColumnType["NUMERIC"] = "NUMERIC";
  ColumnType["DECIMAL"] = "DECIMAL";
  ColumnType["MONEY"] = "MONEY";
  ColumnType["DATE"] = "DATE";
  ColumnType["TIME"] = "TIME";
  ColumnType["DATETIME"] = "DATETIME";
  ColumnType["VARCHAR"] = "VARCHAR";
  ColumnType["STRING"] = "STRING";
  ColumnType["CHAR"] = "CHAR";
})(ColumnType || (exports.ColumnType = ColumnType = {}));

var _default = {};
exports.default = _default;