import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";
import cardModel from './CardModel'
import userModel from "./UserModel";

@Entity('column')
export default class columnModel {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    title: string;

    @CreateDateColumn()
    creationTime: Date;

    @UpdateDateColumn()
    updateTime: Date;

    @DeleteDateColumn()
    deleteTime: Date;

    @Column()
    userId: string;

    @ManyToOne(() => userModel, user => user.columns)
    @JoinColumn({ name: 'userId' })
    user: userModel

    @OneToMany(() => cardModel, card => card.column, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'columnId' })
    cards: cardModel[];
}