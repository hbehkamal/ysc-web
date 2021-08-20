import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequstService {

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * @description send api with method get
   * @param URL string
   * @param ID number
   * @param QUERYPARAM string
   * @author َAli Omidian ๏̯͡๏
   */
  GET(URL: string, ID?, QUERYPARAM?): Observable<any> {
    let url: string = environment.root + '/' + URL;
    if (ID || ID === 0) {
      url += '/' + ID;
    }
    if (QUERYPARAM) {
      url += '?' + QUERYPARAM;
    }
    return this.http.get<any>(url);
  }

  /**
   * @description send api with method delete
   * @param URL string
   * @param ID number
   * @author َAli Omidian ๏̯͡๏
   */
  DELETE(URL: string, ID): Observable<any> {
    return this.http.delete<any>(environment.root + '/' + URL + '/' + ID);
  }

  /**
   * @description send api with method post if file exist data sended in form data and remove arabic charecter
   * @param URL string
   * @param DATA object
   * @param FILE file
   * @author َAli Omidian ๏̯͡๏
   */
  POST(URL: string, _DATA?, FILE?: File): Observable<any> {
    if (typeof FILE !== 'undefined') {
      const formData: FormData = new FormData();
      formData.append('PicturePath', FILE);
      for (const key in _DATA) {
        if (_DATA.hasOwnProperty(key)) {
          formData.append(key, _DATA[key]);
        }
      }
      return this.http.post<any>(environment.root + '/' + URL, formData
      );
    } else {
      return this.http.post<any>(environment.root + '/' + URL, _DATA
      );
    }
  }

  /**
   * @description send api with method put if file exist data sended in form data and remove arabic charecter
   * @param URL string
   * @param DATA object
   * @param ID number
   * @param FILE file
   */
  PUT(URL: string, _DATA, ID?, FILE?: File): Observable<any> {
    if (typeof FILE !== 'undefined') {
      const formData: FormData = new FormData();
      formData.append('PicturePath', FILE);
      for (const key in _DATA) {
        if (_DATA.hasOwnProperty(key)) {
          formData.append(key, _DATA[key]);
        }
      }
      return this.http.put<any>(environment.root + '/' + URL + '/' + ID, formData);
    } else {
      if (ID || ID === 0) {
        return this.http.put<any>(environment.root + '/' + URL + '/' + ID, _DATA);
      } else {
        return this.http.put<any>(environment.root + '/' + URL, _DATA);
      }
    }
  }

}
