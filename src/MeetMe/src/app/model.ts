    export class User {
        constructor(
          public _id: string,
          public name: string,
          public mygroup: string
        ) { }
      }
      export class Meeting {
        constructor(
          public _id: string,
          public topic: string
        ) { }
      }
      export class MyGroup {
        constructor(
          public _id: string,
          public name: string,
          public groupid : string
        ) { }
      }