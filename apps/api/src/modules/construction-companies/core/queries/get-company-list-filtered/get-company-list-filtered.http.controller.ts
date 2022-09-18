import { PromiseUtils, reply, Route } from '@mf-cos/server';
import { Request, Response } from 'express';

import { ConstructionCompanyRepositoryAdapter } from '../../../adapters/persistance/construction-company';
import { GetCompanyListFilteredQuery } from './get-company-list-filtered.query';
import { GetCompanyListFilteredRequestDto } from './get-company-list-filtered.request.dto';
import { GetCompanyListFilteredResponseDto } from './get-company-list-filtered.response.dto';

export class GetCompanyListFilteredHttpController {
  @Route.Get('/v1/companies', {
    middlewares: [],
  })
  public async execute(req: Request, res: Response) {
    const dto = GetCompanyListFilteredRequestDto.build(req.query as any);
    console.log({ dto });
    const [errors, results] = await PromiseUtils.useCatch(
      (async () => {
        const query = new GetCompanyListFilteredQuery(
          ConstructionCompanyRepositoryAdapter.build(),
        );
        return query.execute(dto);
      })(),
    );

    if (errors) throw errors;

    const responseDto = GetCompanyListFilteredResponseDto.build(results);
    return reply({
      res,
      results: responseDto,
    });
  }
}
