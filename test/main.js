// Copyright 2015, Amazon Web Services.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// the role ARN to assume for any AWS SDK related calls
// the role must have a trusted policy with
// "lambda.amazonaws.com" and "arn:aws:iam::<YOUR ACCOUNT ID>:user/<YOUR USER>"

function context() {
   var context = require('./context.json');
   context.done = function(error, result) {
       console.log('context.done');
       console.log(error);
       console.log(result);
       process.exit();
   }
   context.succeed = function(result) {
       console.log('context.succeed');
       console.log(result);
       process.exit();
   }
   context.fail = function(error) {
       console.log('context.fail');
       console.log(error);
       process.exit();
   }

   return context;

}
       
var lambda = require('../src/index.js');
//var launch = require('./input.json');
//lambda.handler(launch, context());

var answerquestion = require('./answerquestion.json');
lambda.handler(answerquestion, context());
