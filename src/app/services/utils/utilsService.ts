
export class UtilsService {

  // uuid() {
  //    _p8(s) {
  //     var p = (Math.random().toString(16) + "000000000").substr(2, 8);
  //     return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
  //   }
  //   return _p8() + _p8(true) + _p8(true) + _p8();
  // }

  uuid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  public date = {
    //https://stackoverflow.com/questions/26873200/momentjs-getting-javascript-date-in-utc

    dateToUtcMilliSecconds: (date)=>
      {
        return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
        date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds())
      },
    localDateToUtcMilliSecconds: (date) =>
      {
        return  date.getTime() + (date.getTimezoneOffset() * 60000);
      },

    utcMilliSeccondsToLocalDate: (millisecconds) =>
      {
        var now = new Date();
        return now.setTime(millisecconds - (now.getTimezoneOffset() * 60000));
      },
    utcMilliSeccondsToTimeZoneDate: (millisecconds, timezoneOffset) =>
      {
        var now = new Date();
        return now.setTime(millisecconds - (timezoneOffset * 60000));
      }

  }
}

