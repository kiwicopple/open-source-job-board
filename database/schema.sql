drop table if exists jobs;
drop table if exists companies;
drop table if exists categories;

create table categories (
    id bigint generated by default as identity primary key,
    name text,
    description text
);

create table companies (
    id bigint generated by default as identity primary key,
    inserted_at timestamptz default timezone('utc', now()) not null,
    name text
);

create table jobs (
    id bigint generated by default as identity primary key,
    company_id bigint not null references companies(id),
    name text,
    description text
);

create table job_categories (
    job_id bigint not null references jobs(id),
    category_id bigint not null references categories(id),
    primary key (job_id, category_id)
);

-- Dummy data
insert into
    categories(id, name, description)
values
    (1, 'Natural', 'Natural climate solutions'),
    (2, 'Science', 'Science solutions'),
    (3, 'Tech', 'Withing the tech industry');

insert into
    companies(id, name)
values
    (1, 'Stripe'),
    (2, 'Microsoft');

insert into
    jobs(id, company_id, name, description)
values
    (1, 1, 'Climate officer', '# Climate officer'),
    (2, 2, 'Sustainability manager', '# Sustainability manager');

insert into
    job_categories(job_id, category_id)
values
    (1, 1),
    (2, 2);