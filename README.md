<h1>Differences between interfaces and types in TypeScript</h1>



<table >
  <tr>
    <th>Interface</th>
    <th>Types</th>

  </tr>
  <tr>
    <td>Interface define the data type.</td>
    <td>Type also denine the dta type </td>

  </tr>
  <tr>
    <td>Its keyword is interface</td>
    <td>Its keyword is type</td>

  </tr>
  <tr>
    <td>Example:
      
    interface IUser {
    name: string;
    id: number;
    isDeleted: boolean
    }
  </td>
    <td>
      Example:
      
    type TUser =  {
    name: string;
    id: number;
    isDeleted: boolean
    }
   </td>

  </tr>
  
  <tr>
    <td>It possible to create a new interface by extending an existing interface using entends keyowrd</br>
    Example:
    
    interface IUser {
    name: string;
    id: number;
    isDeleted: boolean
    }
    interface IAdmin extends IUser {
    role: string
    }
  </td>
  
  <td>It possible to create a new type by extending an existing type using & operator </br>
    Example:
      
    type TUser=  {
    name: string;
    id: number;
    isDeleted: boolean
    }
    type TAdmin = TUser & {role: string}
  </br>
  </td>
  </tr>
</table>

<h1>Causes of using the keyof keyword in TypeScript</h1>
<li>
  keyof keyword mainly use to create string literal by using the key of an interface or a type. </br>
  Example:
  
    interface IUser {
    name: string;
    age: number;
    gender: "male" | "female";
    }
    type TUsrProperty1= 'name' | 'age'| 'gender'
    type TUsrProperty2 = keyof IUser
</li>
<li>
  To make a conditional type the keyof keyword is used widely.
  Example:
    
    type TMyProperties = {
    car: boolean;
    byke: boolean;
    truk: boolean; 
    }; 
    type TCheckProperty<T> = T extends keyof TMyProperties ? "Found" : null;

</li>

