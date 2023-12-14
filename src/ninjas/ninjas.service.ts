import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';

@Injectable()
export class NinjasService {
    private ninjas = [
        { id: 0, name: 'NinjaA', weapon: 'stars' },
        { id: 1, name: 'NinjaB', weapon: 'nunchuks' },
    ];

    getNinjas(weapon: 'stars' | 'nunchuks') {
        if (weapon) {
            return this.ninjas.filter(ninja => ninja.weapon === weapon);
        }
    }

    getOneNinja(id: number) {
        const ninja = this.ninjas.find(ninja => ninja.id === id);

        if (!ninja) throw new Error("No ninja found");

        return ninja
    }

    createOne(createNinja: CreateNinjaDto) {
        const newNinja = {
            ...createNinja,
            id: Date.now()
        }

        this.ninjas.push(newNinja);
        return newNinja;
    }
}
