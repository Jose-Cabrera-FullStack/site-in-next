type ClassCondition = { [key: string]: boolean | undefined };
type ClassType = undefined | string | string[] | ClassCondition;


export const classes = (...args: ClassType[]): string => {
  var classes = [];

  for (var i = 0; i < args.length; i++) {
    var arg = args[i];
    if (!arg) continue;

    var argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (argType === 'object') {
      for (var key of Object.keys(arg)) {
        if ((arg as ClassCondition)[key]) {
          classes.push(key);
        }
      }
    }
  }
  return classes.join(' ');
}


export const isTextValid = (text: string, type: string): boolean => {
  switch(type){
    case 'email':
      return /^([a-zA-Z0-9_.\-+])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(text);
    case 'password':
      // validate password maybe?
      return true;
    case 'card':
      return /^[0-9]{16}$/.test(text);
    case 'cvv':
      return /^[0-9]{3,4}$/.test(text);
    case 'expiration':
      return /^([0-9]{2})+\/+([0-9]{2})$/.test(text);
    case 'text':
    default:
      return text !== '' ? true : false;
  }
}

export const toBase64 = (file: any) => new Promise((resolve, reject) => {
  const reader: any = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error: any) => reject(error);
});

export const returnLevel = (n: number) => {
  switch(n){
    case 1:
      return 'basico'
    case 2:
      return 'intermedio';
    case 3:
    default:
      return 'avanzado';
  }
}

export const cookieParser = () => {
  return document.cookie
    .split(';')
    .reduce((res, c) => {
      const [key, val] = c.trim().split('=').map(decodeURIComponent)
      try {
        return Object.assign(res, { [key]: JSON.parse(val) })
      } catch (e) {
        return Object.assign(res, { [key]: val })
      }
    }, {});
}

// export const API_URI = process.env.REACT_APP_API || 'https://api.tusclasesdeguitarra.com';
export const API_URI = process.env.REACT_APP_API || 'https://tcdg.herokuapp.com/public';