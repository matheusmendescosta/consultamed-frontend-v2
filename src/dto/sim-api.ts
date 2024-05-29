export namespace SimApiDto {
  export type User = {
    id: string;
    name: string;
    email: string;
    active: string;
    profile: Profile;
    token: string | null;
  };

  export type Session = {
    user: User;
    token: string;
  };

  export type Profile = {
    id: string,
      phone: string,
      cpf: string,
      genre: string,
      birthday: string,
      pix: string,
      role: Role,
      userId: string,
      city: string
  };
  
  export type Role = {
    administrator: 'administrator',
    consultant: 'consultant',
    indicator: 'indicator',
    coordinator: 'coordinator',
    financial: 'financial'
  };
}
