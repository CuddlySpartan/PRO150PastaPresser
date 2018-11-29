﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UserService.Models;

namespace UserService.Services
{
    public class UserHelper
    {
        public static UserListModel GetAllUsers()
        {
            UserListModel model = new UserListModel();

            using (var context = new PastaPresserEntities())
            {
                var UserEntities = context.UserDatas.ToList();

                UserEntities.ForEach(UserEntity =>
                {
                    model.Users.Add(new UserModel()
                    {
                        ID = UserEntity.PlayerId,
                        Password = UserEntity.Password,
                        Lira = UserEntity.Lira,
                        CheeseCount = UserEntity.CheeseCount,
                        SauceCount = UserEntity.SauceCount,
                        MeatCount = UserEntity.MeatCount,
                        PastaCount = UserEntity.PastaCount,
                        ClickUpgrade = UserEntity.ClickUpgrade,
                        LastLogin = UserEntity.LastLogin,
                        LPS = UserEntity.LPS

                    });
                });
            }

            return model;
        }

        public static UserModel GetUserById(int id)
        {
            UserModel model = null;
            using (var context = new PastaPresserEntities())
            {
                var UserEntity = context.UserDatas.Single(b => b.PlayerId == id);

                // We again have to map from our entity to our View Model
                model = new UserModel()
                {
                    ID = UserEntity.PlayerId,
                    Password = UserEntity.Password,
                    Lira = UserEntity.Lira,
                    CheeseCount = UserEntity.CheeseCount,
                    SauceCount = UserEntity.SauceCount,
                    MeatCount = UserEntity.MeatCount,
                    PastaCount = UserEntity.PastaCount,
                    ClickUpgrade = UserEntity.ClickUpgrade,
                    LastLogin = UserEntity.LastLogin,
                    LPS = UserEntity.LPS,
                    Tier = UserEntity.Tier
                };
            }
            return model;
        }


        public static UserModel GetUserByUserName(string UserName)
        {
            UserModel model = null;
            using (var context = new PastaPresserEntities())
            {
                var UserEntity = context.UserDatas.Single(b => b.UserName == UserName);

                // We again have to map from our entity to our View Model
                model = new UserModel()
                {
                    ID = UserEntity.PlayerId,
                    Password = UserEntity.Password,
                    Lira = UserEntity.Lira,
                    CheeseCount = UserEntity.CheeseCount,
                    SauceCount = UserEntity.SauceCount,
                    MeatCount = UserEntity.MeatCount,
                    PastaCount = UserEntity.PastaCount,
                    ClickUpgrade = UserEntity.ClickUpgrade,
                    LastLogin = UserEntity.LastLogin,
                    LPS = UserEntity.LPS

                };
            }
            return model;
        }

        public static void CreateUser(string password, DateTime lastLogin, int lira = 0, int cheeseCount = 0, int sauceCount = 0, int meatCount = 0, int pastaCount = 0, int clickUpgrade = 0, int newLPS = 0)
        {
            using (var context = new PastaPresserEntities())
            {
                var newUser = new UserData()
                {
                    Password = password,
                    Lira = lira,
                    CheeseCount = cheeseCount,
                    SauceCount = sauceCount,
                    MeatCount = meatCount,
                    PastaCount = pastaCount,
                    ClickUpgrade = clickUpgrade,
                    LastLogin = lastLogin,
                    LPS = newLPS
                };

                context.UserDatas.Add(newUser);
                context.SaveChanges();
            }
        }
        public static void EditUser(int id, string password, int lira, int cheeseCount, int sauceCount, int meatCount, int pastaCount, int clickUpgrade, DateTime lastLogin, int newLPS)
        {
            using (var context = new PastaPresserEntities())
            {
                var result = context.UserDatas.SingleOrDefault(m => m.PlayerId == id);
                if (result != null)
                {
                    result.Password = password;
                    result.Lira = lira;
                    result.CheeseCount = cheeseCount;
                    result.SauceCount = sauceCount;
                    result.MeatCount = meatCount;
                    result.PastaCount = pastaCount;
                    result.ClickUpgrade = clickUpgrade;
                    result.LastLogin = lastLogin;
                    result.LPS = newLPS;

                    context.Entry(result).State = System.Data.Entity.EntityState.Modified;

                    context.SaveChanges();
                }
            }
        }

        public static void DeleteUser(int id)
        {
            using (var context = new PastaPresserEntities())
            {
                var result = context.UserDatas.SingleOrDefault(m => m.PlayerId == id);
                if (result != null)
                {
                    context.UserDatas.Remove(result);
                    context.SaveChanges();
                }
            }
        }
    }
}
