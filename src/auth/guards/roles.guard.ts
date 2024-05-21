import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";


@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) { }

  canActivate(context: ExecutionContext): boolean {
    const handlerRoles = this.reflector.get<string[]>('roles', context.getHandler());
    const classRoles = this.reflector.get<string[]>('roles', context.getClass());

    let requiredRoles;
    if (handlerRoles === null) {
      return true;
    } else if (handlerRoles !== undefined) {
      requiredRoles = handlerRoles;
    } else {
      requiredRoles = classRoles;
    }

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    return requiredRoles.indexOf(user?.role) > -1;
  }
}