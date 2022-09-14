import { Response } from "miragejs";
import { requiresAuth } from "../utils/authUtils";
import { v4 as uuid } from "uuid";

/**
 * All the routes related to employes are present here.
 *  These are Privately accessible routes.
 * */

/**
 * This handler handles gets all employes in the db.
 * send GET Request at /api/employes
 * */

export const getAllEmployesHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  if (!user) {
    return new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      }
    );
  }
  return new Response(200, {}, { employes: user.employes });
};

/**
 * This handler handles creating a new employee
 * send POST Request at /api/employes
 * */

export const createEmployesHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const { employee } = JSON.parse(request.requestBody);
      user.employes.push({ ...employee, _id: uuid() });
    this.db.users.update({ _id: user._id }, user);
    return new Response(201, {}, { employes: user.employes });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles creating a new employee
 * send DELETE Request at /api/employes/:employeeId
 * */

export const deleteEmployesHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const employeeId = request.params.employeeId;
    user.employes = user.employes.filter((item) => item._id !== employeeId);
    this.db.users.update({ _id: user._id }, user);
    return new Response(200, {}, { employes: user.employes });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles updating a employee
 * send POST Request at /api/employes/:employeeId
 * body contains {employee}
 * */

export const updateEmployesHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const { employee } = JSON.parse(request.requestBody);
    const { employeeId } = request.params;
    const employeeIndex = user.employes.findIndex((employee) => employee._id === employeeId);
    user.employes[employeeIndex] = { ...user.employes[employeeIndex], ...employee };
    this.db.users.update({ _id: user._id }, user);
    return new Response(201, {}, { employes: user.employes });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};