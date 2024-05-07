import { getDb } from '@/db/system';
import { sessions } from '@/db/system/schema';
import { Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';

@Injectable()
export class SessionsService {
  db = getDb();
  findAll() {
    return this.db.query.sessions.findMany();
  }

  findOne(id: string) {
    return this.db.query.sessions.findFirst({
      where: eq(sessions.id, id),
    });
  }
}
