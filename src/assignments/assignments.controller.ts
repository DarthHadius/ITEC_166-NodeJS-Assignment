import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

    @Get('fibonacci/:n')
    generateFibonacci(@Param('n') n: string): { sequence: number[] } {
        const limit = parseInt(n, 10);

        if (isNaN(limit) || limit <= 0) {
            throw new Error('Please provide a positive integer as the parameter.');
        }

        return { sequence: this.buildFibonacciSequence(limit) };
    }

    private buildFibonacciSequence(count: number): number[] {
        const fibSeries = [];
        let first = 0, second = 1;

        for (let index = 0; index < count; index++) {
            fibSeries.push(first);
            [first, second] = [second, first + second];
        }

        return fibSeries;
    }
}

