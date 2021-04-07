export class User {

  readonly id: string; // id de l’utilisateur
  email: string; // email de l’utilisateur
  isNewUser: boolean; // première connexion de l’utilisateur ?
  lastLoginDate: number; // date de la dernière connexion
  name: string; // nom de l’utilisateur
  avatar: string; // url de la photo de profil
  pomodoroDuration: number; // durée des pomodoros
  registrationDate: number; // date d’inscription
  roles: Array<'USER'|'EMPLOYEE'>; // rôles

  constructor(options: {
    id?: string,
    email?: string,
    isNewUser?: boolean,
    lastLoginDate?: number,
    name?: string,
    avatar?: string,
    pomodoroDuration?: number,
    registrationDate?: number
    roles?: Array<'USER'|'EMPLOYEE'>
  } = {}) {
    this.id = options.id || '';
    this.email = options.email || '';
    this.isNewUser= options.isNewUser || true;
    this.lastLoginDate= options.lastLoginDate || 0;
    this.name= options.name || '';
    this.avatar = options.avatar || '';
    this.pomodoroDuration = options.pomodoroDuration || 1500;
    this.registrationDate= options.registrationDate || 0;
    this.roles = options.roles ||
    this.email.endsWith('google.com')?
      ['USER', 'EMPLOYEE'] : ['USER'];

  }
}
