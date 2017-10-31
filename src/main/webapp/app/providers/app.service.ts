import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AppService {
    
     
    constructor(private http: Http) { 
        console.log("Application Service Started");        
    }
 /**
     * getTodos
     */
    public getTodos(): Observable<any> {
        return this.http.get('/todos').map((res: Response) => {
                return res.json();
            });
    }

     /**
     * getTodos
     */
    public removeTodo(data: any): Observable<any> {
        return this.http.post('/delete', data).map((res: Response) => {
                return res.json();
            });
    }

    /**
     * saveTodoService
     */
    public saveTodoService(type: any, viewData?: any): Observable<any> {
         let headers = new Headers();
        headers.append('Content-Type', 'application/json'); 
        let data =viewData;

        if(type != 'save'){
            if(data["completed"] == true ){
                data["completed"] = false;
            }else{
                data["completed"] = true;
            }
        }
        return this.http.post('/save',data, {headers: headers})
            .map((res:Response) => {
               return res.json();
            }
        );
    }
  
    
}
