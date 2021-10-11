from enum import unique, Enum
from sqlalchemy import Integer, Column, String, ForeignKey, Table
from sqlalchemy.ext.declarative import declarative_base, declared_attr
from sqlalchemy.ext.hybrid import hybrid_method
from sqlalchemy.orm import relationship

Base = declarative_base()

# 用户角色关系表(多对多)
user_role = Table('user_role', Base.metadata,
                  Column('user_id', Integer, ForeignKey('user.id')),
                  Column('role_id', Integer, ForeignKey('role.id')))


# 用户表
class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100))
    addresses = relationship("UserAddress", lazy="select", back_populates="user")
    roles = relationship("Role", secondary=user_role, lazy="select")
    attributes = relationship("UserAttributes", uselist=False, lazy="select")

    def __init__(self, name=None):
        self.name = name

    @property
    def hello(self):
        print("@property hello")
        if hasattr(self, "_hello"):
            return self._hello
        return "hello"

    @hello.setter
    def hello(self, name):
        self._hello = name

    @hybrid_method
    def user_eq(self, name):
        return self.name == name

    @user_eq.expression
    def user_eq(self, name):
        return self.name != name

    # @declared_attr
    # def submit_by_group(cls):
    #     return Column(String(100))

    def __repr__(self):
        return "<User(id='%s', name='%s')>" % (self.id, self.name)


@unique
class UserAddressType(Enum):
    shipping = "shipping"
    home = "home"


# 用户地址表(一对多)
class UserAddress(Base):
    __tablename__ = 'user_address'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("user.id"))
    name = Column(String(100))
    user = relationship("User", back_populates="addresses")
    type = Column(String(100))

    __mapper_args__ = {"polymorphic_on": type, "with_polymorphic": "*"}

    def __init__(self, name=None):
        self.name = name

    def __repr__(self):
        return "<UserAddress(user_id='%s', name='%s')>" % (self.user_id, self.name)

    @classmethod
    def get_type_name(cls):
        return cls.__mapper_args__["polymorphic_identity"]


class UserHomeAddress(UserAddress):
    __mapper_args__ = {"polymorphic_identity": "home"}


# 用户属性表(一对一)
class UserAttributes(Base):
    __tablename__ = 'user_attributes'
    id = Column(Integer, ForeignKey("user.id"), primary_key=True)
    sex = Column(String(10))
    user = relationship("User")

    def __init__(self, sex=None):
        self.sex = sex

    def __repr__(self):
        return "<UserAttributes(id='%s', sex='%s')>" % (self.id, self.sex)


# 角色表
class Role(Base):
    __tablename__ = 'role'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100))

    def __init__(self, name=None):
        self.name = name

    def __repr__(self):
        return "<Role(id='%s', name='%s')>" % (self.id, self.name)
