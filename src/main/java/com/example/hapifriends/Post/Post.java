package com.example.hapifriends.Post;

import com.example.hapifriends.User.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.sun.istack.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    private String text;
    @Column(columnDefinition = "boolean default false")
    private Boolean ispublic;

    @ManyToOne
    @JoinColumn(name = "author", referencedColumnName = "id", nullable = false)
    @JsonIgnoreProperties("friends")
    private User user;


}
