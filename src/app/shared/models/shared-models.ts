export interface UserLoginDialogData {
  category: string;
  favorite_color: string;
  first_name: string;
  last_name: string;
}


export interface Friend {
  first_name: string,
  last_name: string,
  category: Category | string,
  favorite_color: Color | string,
  pic: string;
  isSelected: boolean;
}


export enum Color {
  Blue = 'blue',
  Purple = 'purple',
  Navy = 'navy',
  Pink = 'pink',
  Orange = 'orange',
  Grey = 'grey',
  Black = 'black',
  Red = 'red',
  Yellow = 'yellow',
  None = ''
}

export enum Category {
  Sports = 'sports',
  Reading = 'reading',
  Health = 'health',
  Technology = 'technology',
  Gaming = 'gaming',
  None = ''
}
