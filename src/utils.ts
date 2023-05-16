import type { WorkerUser } from "./api/workeruser";

export interface ICheckboxGroupInput {
    [key: string]: {
        value: boolean;
        label: string;
    };
}

export interface ISelectOption {
    id: any;
    label: string;
}

export const VideoExtensions: string[] = ['.mp4', '.mov']; // , '.webm', '.mkv'

export const ImageExtensions: string[] = ['.jpg', '.jpeg', '.png', '.bmp', '.gif', '.raw'];

export const ScreenHaveMoreWidthThanHeight = (document: Document) => {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    return width > height;
}

export const FileIsValidImg = (fileName: string) => {
    return fileName && ImageExtensions.some(e => String(fileName).toLowerCase().endsWith(e));
}

export const FileIsValidVideo = (fileName: string) => {
    return fileName && VideoExtensions.some(e => String(fileName).toLowerCase().endsWith(e));
}

export const FileHasValidExtension = (fileName: string) => {
    return fileName && (FileIsValidImg(fileName) || FileIsValidVideo(fileName));
}

export const ValidateMediaContent = (toastr: any, files: File[]) => {
    if (!toastr || !files) {
        return false;
    }
    for (const file of files) {
        if (!FileHasValidExtension(file.name)) {
            toastr.error('Tipo de archivo no permitido. Archivo: ' + file.name);
            return false;
        }
        const fileSize = file.size / 1024 / 1024; // In MB
        if (fileSize > 50) {
            toastr.error('No se puede subir un archivo mayor a 50MB. Archivo: ' + file.name);
            return false;
        }
    }
    return true;
}

export const IsScrolledIntoView = (el: Element) => {
    if (!el || !el?.getBoundingClientRect || typeof el?.getBoundingClientRect !== 'function') {
        return false;
    }
    const rect = el.getBoundingClientRect?.();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;
    // Only completely visible elements return true:
    // (elemTop >= 0) && (elemBottom <= window.innerHeight);
    const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

export const RemoveFileExtension = (str: string) => {
    if (!str) {
        return str;
    }
    return str.substring(0, str.lastIndexOf('.'));
}

export const GetUrlPreview = (fileName: string) => {
    if (!fileName || fileName === './assets/images/default_user_profile.png' || fileName === './assets/images/profile_default.png') {
        return fileName;
    }
    if (fileName.endsWith('-preview.png')) {
        return fileName;
    }
    return fileName && RemoveFileExtension(fileName) + '-preview.png';
}

export const GetStringDateFromAge = (age: number, getShortStr: boolean = true) => {
    const now = new Date();
    const str = (now.getFullYear() - age) + '-' + (now.getMonth() + 1 < 10 ? '0' + String(now.getMonth() + 1) : now.getMonth() + 1) + '-' +
        (now.getDate() < 10 ? '0' + String(now.getDate()) : now.getDate());
    if (getShortStr) {
        return str;
    }
    return str + 'T03:00:00.000Z';
}

export const isIOS = () => {
    return [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ].includes(navigator.platform)
        // iPad on iOS 13 detection
        || (navigator.userAgent.includes('Mac') && 'ontouchend' in document);
}

export const CheckUruguayCellPhone = (phone: string) => {
    const patt = new RegExp(/^(?:(0\d{1})|\d{1})[9]\d{7}$/);
    const patt2 = new RegExp(/^(?:(598\d{3})|\d{3})[9]\d{7}$/);
    return patt.test(phone) || patt2.test(phone);
}

export const CheckValidEmail = (email: string) => {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}

export const isMobileOrTablet = () => {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || (window as any).opera);
    return check;
}

export const WorkkerUserServices = (defaultValue: boolean = false, loggedSex: string = 'male'): ICheckboxGroupInput => {
    return {
        attendMan: {
            value: defaultValue,
            label: 'Settings.Tab_profile.AttendMan'
        },
        attendWomen: {
            value: defaultValue,
            label: 'Settings.Tab_profile.AttendWomen'
        },
        attendTrans: {
            value: defaultValue,
            label: 'Settings.Tab_profile.AttendTrans'
        },
        attendCouples: {
            value: defaultValue,
            label: 'Settings.Tab_profile.AttendCouples'
        },
        companion: {
            value: defaultValue,
            label: 'Settings.Tab_profile.Companion'
        },
        active: {
            value: defaultValue,
            label: loggedSex === 'male' ? 'Settings.Tab_profile.Active' : 'Settings.Tab_profile.Active_'
        },
        pasive: {
            value: defaultValue,
            label: loggedSex === 'male' ? 'Settings.Tab_profile.Pasive' : 'Settings.Tab_profile.Pasive_'
        },
        kisses: {
            value: defaultValue,
            label: 'Settings.Tab_profile.Kisses'
        },
        threesomes: {
            value: defaultValue,
            label: 'Settings.Tab_profile.Threesomes'
        },
        orgies: {
            value: defaultValue,
            label: 'Settings.Tab_profile.Orgies'
        },
        rains: {
            value: defaultValue,
            label: 'Settings.Tab_profile.Rains'
        },
        sado: {
            value: defaultValue,
            label: 'Settings.Tab_profile.Sado'
        },
        feet: {
            value: defaultValue,
            label: 'Settings.Tab_profile.Feet'
        },
        fisting: {
            value: defaultValue,
            label: 'Settings.Tab_profile.Fisting'
        },
        anal: {
            value: defaultValue,
            label: 'Settings.Tab_profile.Anal'
        },
        vaginal: {
            value: defaultValue,
            label: 'Settings.Tab_profile.Vaginal'
        },
        toys: {
            value: defaultValue,
            label: 'Settings.Tab_profile.Toys'
        },
        massages: {
            value: defaultValue,
            label: 'Settings.Tab_profile.Massages'
        },
        freeTermination: {
            value: defaultValue,
            label: 'Settings.Tab_profile.FreeTermination'
        },
        changingRoles: {
            value: defaultValue,
            label: 'Settings.Tab_profile.ChangingRoles'
        },
        lingerie: {
            value: defaultValue,
            label: 'Settings.Tab_profile.Lingerie'
        },
    };
}

export const WorkDaysCheckBoxes = (defaultValue: boolean = false): ICheckboxGroupInput => {
    return {
        monday: {
            value: defaultValue,
            label: 'Settings.Tab_profile.Mon'
        },
        tuesday: {
            value: defaultValue,
            label: 'Settings.Tab_profile.Tue'
        },
        wednesday: {
            value: defaultValue,
            label: 'Settings.Tab_profile.Wed'
        },
        thursday: {
            value: defaultValue,
            label: 'Settings.Tab_profile.Thu'
        },
        friday: {
            value: defaultValue,
            label: 'Settings.Tab_profile.Fr'
        },
        saturday: {
            value: defaultValue,
            label: 'Settings.Tab_profile.Sa'
        },
        sunday: {
            value: defaultValue,
            label: 'Settings.Tab_profile.Su'
        },
    };
}

export const WorkPlacesCheckBoxes = (defaultValue: boolean = false): ICheckboxGroupInput => {
    return {
        privatePlace: {
            value: defaultValue,
            label: 'Settings.Tab_profile.Own_place'
        },
        goHome: {
            value: defaultValue,
            label: 'Settings.Tab_profile.House'
        },
        hotel: {
            value: defaultValue,
            label: 'Settings.Tab_profile.Hotel'
        }
    };
}

export const AcceptCardCheckBoxes = (defaultValue: boolean = false): ICheckboxGroupInput => {
    return {
        acceptCard: {
            value: defaultValue,
            label: 'Settings.Tab_profile.Accept'
        },
    };
}

export const EyeColorSelectOptions = (): ISelectOption[] => {
    return [
        { id: 'green', label: 'Profile.Info.Eyes.green' },
        { id: 'blue', label: 'Profile.Info.Eyes.blue' },
        { id: 'grey', label: 'Profile.Info.Eyes.grey' },
        { id: 'brown', label: 'Profile.Info.Eyes.brown' },
        { id: 'black', label: 'Profile.Info.Eyes.black' },
        { id: 'honey', label: 'Profile.Info.Eyes.honey' },
        { id: 'lightblue', label: 'Profile.Info.Eyes.lightblue' },
        { id: 'other', label: 'Profile.Info.other' },
    ];
}

export function GetSafe<T>(fn: () => any, defaultValue?: any): T {
    try {
        const result = fn();
        if (result === null || result === undefined) {
            return defaultValue;
        }
        return result;
    } catch (_error) {
        return defaultValue;
    }
}

export const EmailIsValid = (email: string) => {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

export const SettingsWeight = (): number[] => {
    const minWeigth = 40;
    const maxWeigth = 150;
    return getNumberList(minWeigth, maxWeigth);
};

export const SettingsHeight = (): number[] => {
    const minHeight = 120;
    const maxHeight = 200;
    return getNumberList(minHeight, maxHeight);
}

export const GetAgeFromDateStr = (dateString: string) => {
    if (!dateString) {
        return undefined;
    }
    const now = new Date();
    const birthDate = new Date(dateString);
    let age = now.getFullYear() - birthDate.getFullYear();
    const m = now.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

export const DateFrom = (dayjs: any, date: string, locale = 'es'): string => {
    if (date && dayjs && dayjs(date).isValid()) {
        const str = dayjs(date).locale(locale).fromNow(true).replace('una', '1').replace('un', '1');
        if (str.includes('segundos')) {
            return 'unos segundos';
        }
        return str;
    }
    return '';
}

export const EscapeRegExp = (str: string): string => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

export const ReplaceAll = (str: string, find: string, replace: string): string => {
    return str.replace(new RegExp(EscapeRegExp(find), 'g'), replace);
}

export const DateFromShort = (dayjs: any, date: string): string => {
    const d = DateFrom(dayjs, date);
    if (d.includes('hora') || d.includes('horas')) {
        return d.replace(d.includes('horas') ? 'horas' : 'hora', 'h');
    } else if (d.includes('minuto') || d.includes('minutos')) {
        return d.replace(d.includes('minutos') ? 'minutos' : 'minuto', 'min');
    } else if (d.includes('día') || d.includes('días')) {
        return d.replace(d.includes('días') ? 'días' : 'día', 'd');
    } else if (d.includes('mes')) {
        const custom = d.replace(d.includes('meses') ? 'meses' : 'mes', 'sem');
        const split = custom.split(' ');
        const sem = `${(parseInt(split[0]) * 4)} ${split[1]}`;
        return sem;
    } else {
        return d;
    }
}

export const Capitalize = (s: string, restInLowerCase = true): string => {
    if (!s || typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + (restInLowerCase ? s.slice(1).toLowerCase() : s.slice(1));
}

export const RecursiveMerge = (obj1: any, obj2: any) => {
    const result = obj1;
    for (const i in obj1) {      // for every property in obj1
        if ((i in obj2) && (typeof obj1[i] === "object") && (i !== null)) {
            result[i] = RecursiveMerge(obj1[i], obj2[i]); // if it's an object, merge
        } else {
            result[i] = obj1[i]; // add it to result
        }
    }
    for (const i in obj2) { // add the remaining properties from object 2
        if (i in result) { //conflict
            continue;
        }
        result[i] = obj2[i];
    }
    return result;
}

export const IsNotScullyOrIsAlreadyGenerated = (): boolean => {
    return !(window as any).ScullyIO || (window as any).ScullyIO === 'generated';
}

export const IsBot = () => {
    const robots = RegExp([/bot/, /spider/, /crawl/, /APIs-Google/, /AdsBot/, /Googlebot/, /Chrome-Lighthouse/, /Google Page Speed Insights/, /mediapartners/, /Google Favicon/, /FeedFetcher/, /Google-Read-Aloud/, /DuplexWeb-Google/, /googleweblight/, /bing/, /yandex/, /baidu/, /duckduck/, /yahoo/, /ecosia/, /ia_archiver/, /facebook/, /pinterest/, /reddit/, /slack/, /twitter/, /whatsapp/, /youtube/, /semrush/,].map(e => e.source).join("|"), "i");
    return robots.test(navigator?.userAgent);
}

export const AddNoIndex = (document: Document) => {
    const m = document.createElement('meta');
    m.name = 'robots';
    m.content = 'noindex';
    document.head.appendChild(m);
}

export const GetScheduleDescription = (user: WorkerUser) => {
    return user?.scheduleMin && user?.scheduleMax ?
        user.scheduleMin.substr(0, 2) + 'hs a ' + user.scheduleMax.substr(0, 2) + 'hs' : ''
}

export const GetWorkdaysDescription = (user: WorkerUser) => {
    let description = '';
    if (user.monday) {
        description = 'Lun';
    }
    if (user.tuesday) {
        const tuesday = 'Mar';
        description += description.length ? (', ' + tuesday) : tuesday;
    }
    if (user.wednesday) {
        const wednesday = 'Mié';
        description += description.length ? (', ' + wednesday) : wednesday;
    }
    if (user.thursday) {
        const thursday = 'Jue';
        description += description.length ? (', ' + thursday) : thursday;
    }
    if (user.friday) {
        const friday = 'Vie';
        description += description.length ? (', ' + friday) : friday;
    }
    if (user.saturday) {
        const saturday = 'Sáb';
        description += description.length ? (', ' + saturday) : saturday;
    }
    if (user.sunday) {
        const sunday = 'Dom';
        description += description.length ? (', ' + sunday) : sunday;
    }
    if (
        user.monday &&
        user.tuesday &&
        user.wednesday &&
        user.thursday &&
        user.friday &&
        user.saturday &&
        user.sunday
    ) {
        description = 'Todos los días';
    } else if (
        !user.monday &&
        !user.tuesday &&
        !user.wednesday &&
        !user.thursday &&
        !user.friday &&
        user.saturday &&
        user.sunday
    ) {
        description = 'Fin de semana';
    } else if (
        !user.monday &&
        !user.tuesday &&
        !user.wednesday &&
        !user.thursday &&
        user.friday &&
        user.saturday &&
        user.sunday
    ) {
        description = 'Vie a Dom';
    } else if (
        !user.monday &&
        !user.tuesday &&
        !user.wednesday &&
        user.thursday &&
        user.friday &&
        user.saturday &&
        user.sunday
    ) {
        description = 'Jue a Dom';
    } else if (
        !user.monday &&
        !user.tuesday &&
        user.wednesday &&
        user.thursday &&
        user.friday &&
        user.saturday &&
        user.sunday
    ) {
        description = 'Mié a Dom';
    } else if (
        !user.monday &&
        user.tuesday &&
        user.wednesday &&
        user.thursday &&
        user.friday &&
        user.saturday &&
        user.sunday
    ) {
        description = 'Mar a Dom';
    } else if (
        !user.monday &&
        !user.tuesday &&
        user.wednesday &&
        user.thursday &&
        user.friday &&
        user.saturday &&
        !user.sunday
    ) {
        description = 'Mié a Sáb';
    } else if (
        !user.monday &&
        user.tuesday &&
        user.wednesday &&
        user.thursday &&
        user.friday &&
        !user.saturday &&
        !user.sunday
    ) {
        description = 'Mar a Vie';
    } else if (
        !user.monday &&
        user.tuesday &&
        user.wednesday &&
        user.thursday &&
        user.friday &&
        user.saturday &&
        !user.sunday
    ) {
        description = 'Mar a Sáb';
    } else if (
        user.monday &&
        user.tuesday &&
        user.wednesday &&
        user.thursday &&
        user.friday &&
        !user.saturday &&
        !user.sunday
    ) {
        description = 'Lun a Vie';
    } else if (
        user.monday &&
        user.tuesday &&
        user.wednesday &&
        user.thursday &&
        user.friday &&
        user.saturday &&
        !user.sunday
    ) {
        description = 'Lun a Sáb';
    } else if (
        user.monday &&
        user.tuesday &&
        !user.wednesday &&
        !user.thursday &&
        user.friday &&
        user.saturday &&
        user.sunday
    ) {
        description = 'Vie a Mar';
    }
    return description;
}

export const getNumberList = (start: number, end: number): number[] => {
    const iteration: number[] = [];
    for (let i = start; i < end + 1; i++) {
        iteration.push(i);
    }
    return iteration;
}