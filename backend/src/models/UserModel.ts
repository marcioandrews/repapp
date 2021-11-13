import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, JoinColumn } from "typeorm";
import columnModel from './ColumnModel'
import bcrypt from 'bcryptjs';

@Entity('user')
export default class userModel {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    userName: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    creationTime: Date;

    @UpdateDateColumn()
    updateTime: Date;

    @DeleteDateColumn()
    deleteTime: Date;

    @OneToMany(() => columnModel, column => column.user, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'userId' })
    columns: columnModel[];

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }
}