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
    <td>It possible to create a new type by extending an existing type using & operator
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
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>

  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>

  </tr>
</table>
