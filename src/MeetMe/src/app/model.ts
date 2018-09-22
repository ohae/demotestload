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
          public groupid : string,
          public topic: string,
          public details: string
        ) { }
      }
      export class MyGroup {
        constructor(
          public _id: string,
          public name: string,
        ) { }
      }