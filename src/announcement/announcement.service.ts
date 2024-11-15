import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Announcement } from './schemas/announcement.schema';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';

@Injectable()
export class AnnouncementService {
  constructor(
    @InjectModel(Announcement.name)
    private announcementModel: Model<Announcement>,
  ) {}

  async create(
    createAnnouncementDto: CreateAnnouncementDto,
  ): Promise<Announcement> {
    const createdAnnouncement = new this.announcementModel(
      createAnnouncementDto,
    );
    return createdAnnouncement.save();
  }

  async findAll(): Promise<Announcement[]> {
    return this.announcementModel.find().sort({ createdAt: -1 }).exec();
  }

  async findOne(id: string): Promise<Announcement> {
    const announcement = await this.announcementModel.findById(id).exec();
    if (!announcement) {
      throw new NotFoundException(`Announcement with ID ${id} not found`);
    }
    return announcement;
  }

  async update(
    id: string,
    updateAnnouncementDto: CreateAnnouncementDto,
  ): Promise<Announcement> {
    const updatedAnnouncement = await this.announcementModel
      .findByIdAndUpdate(id, updateAnnouncementDto, { new: true })
      .exec();
    if (!updatedAnnouncement) {
      throw new NotFoundException(`Announcement with ID ${id} not found`);
    }
    return updatedAnnouncement;
  }

  async remove(id: string): Promise<Announcement> {
    const deletedAnnouncement = await this.announcementModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedAnnouncement) {
      throw new NotFoundException(`Announcement with ID ${id} not found`);
    }
    return deletedAnnouncement;
  }
}
