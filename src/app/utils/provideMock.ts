import {Provider, Type} from '@angular/core';
import {instance} from 'ts-mockito';

export function provideMock<T>(mock: T, type: Type<T>): Provider {
  return {
    provide: type,
    useValue: instance(mock)
  };
}
