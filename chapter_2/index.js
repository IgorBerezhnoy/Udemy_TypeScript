// //ts-node chapter_2/index.ts
// //tsc chapter_2/index.ts
// //tsc --init
// // tsc -help
// 31. Enums
var TOP = 'Top';
var RIGHT = 'Right';
function frame(element, dir, tFunc) {
    if (dir === 1 /* Directions.RIGHT */) {
        console.log(tFunc);
    }
}
frame('id', 1 /* Directions.RIGHT */, "linear" /* TimingFunc.LINER */);
// 30. Модификаторы свойств: readonly (Property Modifiers)
// 29. (д) Оператор Non-Null and Non-Undefined
// 28. Модификаторы свойств: optional (Property Modifiers)
// interface User {
//   readonly login: string;
//   password: string;
//   age: number;
//   readonly addr?: string | undefined;
//   parents?: {
//     mother?: string
//     father?: string
//   };
// }
//
// const user: User = {
//   login: 'login',
//   password: '12345',
//   age: 20,
//   addr: ''
// };
//
// const userFreeze: Readonly<User> = {
//   login: 'login',
//   password: '12345',
//   age: 20,
// };
// // user.login = 'sdfsd';
// user.password = 'sdfsd';
// let dbName: string;
// sendUserData(user, '');
// dbName!.toUpperCase();
//
// function sendUserData(obj: User, db?: string): void {
//   dbName = 'asdasd';
//   console.log(obj, db!.toUpperCase());
//   console.log(obj.parents!.father!.toUpperCase());
// }
//
// class Animal {
//   readonly name: string;
//
//   constructor(name: string) {
//     this.name = name;
//   }
// }
//
// const basicPorts: readonly number[] = [3000, 3001, 5556];
// const basicPorts: readonly [number, ...string[]] = [3000, '312', '12312'];
//27. Механизм вывода типов (Type Inference)
//
//
// let salary = 500;
//
// interface UserData {
//   isBirthdayData: boolean;
//   ageData: number;
//   userNameData: string;
// }
//
// const userData = '{"isBirthdayData":true,"ageData":40, "userNameData":"John"}';
// const userObj: UserData = JSON.parse(userData);
//
// const arr=["sss",5,true]
// console.log(userObj);
//
// let isOkay = true;
// let movement: boolean | string = false;
// if (isOkay) {
//   movement = 'moving';
// }
//24. Интерфейсы (Interfaces)
// type ProtocolType = 'http' | 'https';
// type PortType = 3000 | 3001;
// type ServerConfigType = {
//   protocol: ProtocolType,
//   port: PortType
// };
//
// interface IConfigInterface {
//   protocol: ProtocolType,
//   port: PortType,
//   log: (str: string) => void
// }
//
// interface Role {
//   role: string;
// }
//
// interface InterfaceConfigWithRole extends IConfigInterface, Role {
// }
//
// const backupConfig: IConfigInterface = {
//   protocol: 'https',
//   port: 3001,
//   log(str) {
//     console.log(str);
//   }
// };
// const backupConfig1: InterfaceConfigWithRole = {
//   protocol: 'https',
//   port: 3001,
//   role: 'admin',
//   log(str) {
//     console.log(str);
//   }
// };
//
// type startServerType = (protocol: ProtocolType, port: PortType, log: (str: string) => void) => 'Serer started'
// const startServer: startServerType = (protocol, port, log): 'Serer started' => {
//   log(`Serer started in ${protocol}: //server:${port}`);
//   return 'Serer started';
// };
// startServer(backupConfig.protocol, backupConfig.port, backupConfig.log);
//
// interface IStyles {
//   [key: string]: string;
// }
//
// const styles: IStyles = {
//   position: 'abolute',
//   top: '20px',
//   left: '50px',
//
// };
//23. Более продвинутый Type и пересечение типов (Intersection)
// type ProtocolType = 'http' | 'https';
// type PortType = 3000 | 3001;
// type ServerConfigType = {
//   protocol: ProtocolType,
//   port: PortType
// };
// type Role = {
//   role: string
// }
// type ServerConfigWithRoleType = ServerConfigType & Role;
// const serverConfig: ServerConfigWithRoleType = {
//   protocol: 'https',
//   port: 3001,
//   role: 'admin'
// };
// const backupConfig: ServerConfigType = {
//   protocol: 'https',
//   port: 3001
// };
// type startServerType = (protocol: ProtocolType, port: PortType) => 'Serer started'
// const startServer: startServerType = (protocol, port): 'Serer started' => {
//   console.log(`Serer started in ${protocol}: //server:${port}`);
//   return 'Serer started';
// };
//
// startServer(serverConfig.protocol, serverConfig.port);
