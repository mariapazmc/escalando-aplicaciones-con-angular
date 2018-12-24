import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AdminService } from './admin.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

class HttpClientMock {
  get = jasmine.createSpy();
  post = jasmine.createSpy();
}
fdescribe('AdminService', () => {
  let service: AdminService;
  let httpClientMock: HttpClientMock;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useClass: HttpClientMock
        }
      ]
    });
    service = TestBed.get(AdminService);
    httpClientMock = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call http get service', () => {
    const usersList = [1, 2, 3];
    httpClientMock.get.and.returnValue(of(usersList));

    service.getUsers()
      .subscribe(data => {
        expect(data).toEqual(usersList);
        expect(httpClientMock.get).toHaveBeenCalledWith(environment.endpoint.users);
      });
  });

  it('should call http post service', () => {
    const user = {
      name: 'Gonzalo',
      email: 'gonzalo@boolean.cl',
      password: 'supersecretpassword',
      group: 'C'
    };
    httpClientMock.post.and.returnValue(of());

    service.saveUser(user)
      .subscribe(() => {
        expect(httpClientMock.post).toHaveBeenCalledWith(environment.endpoint.users, user);
      });
  });


});
