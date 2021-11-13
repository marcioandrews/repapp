import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";
import { priority } from "../database/migrations/1636030474400-create_cards";
import columnModel from './ColumnModel'

@Entity('card')
export default class cardModel {
    @PrimaryGeneratedColumn('uuid')
    cardId: string;
    
    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    tags: string;

    @Column()
    priority: string;

    @CreateDateColumn()
    creationTime: Date;

    @UpdateDateColumn()
    updateTime: Date;

    @DeleteDateColumn()
    deleteTime: Date;

    @Column()
    columnId: string;

    @ManyToOne(() => columnModel, column => column.cards)
    @JoinColumn({ name: 'columnId' })
    column: columnModel;

}