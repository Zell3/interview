import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Judge0 {
  constructor(private http: HttpClient) { }

  private encodeBase64Unicode(input: string): string {
    const binaryString = encodeURIComponent(input).replace(
      /%([0-9A-F]{2})/g,
      (_, p1) => String.fromCharCode(parseInt(p1, 16))
    );
    return btoa(binaryString);
  }

  runCode(sourceCode: string, languageId: number = 63, stdin: string = ''): Observable<Object> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-rapidapi-key': environment.rapidApiKey,
      'x-rapidapi-host': 'judge0-ce.p.rapidapi.com'
    });

    const body = {
      language_id: languageId,
      source_code: this.encodeBase64Unicode(sourceCode),
      stdin: this.encodeBase64Unicode(stdin),
    };

    return this.http.post(environment.judge0ApiUrl, body, { headers: httpHeaders });
  }
}
