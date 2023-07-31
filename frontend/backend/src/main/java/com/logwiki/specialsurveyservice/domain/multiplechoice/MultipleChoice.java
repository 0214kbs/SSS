package com.logwiki.specialsurveyservice.domain.multiplechoice;

import com.logwiki.specialsurveyservice.domain.question.Question;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class MultipleChoice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String content;

    private Long linkNumber;

    @ManyToOne(fetch = FetchType.LAZY)
    private Question question;

    @Builder
    public MultipleChoice(String content, Long linkNumber, Question question) {
        this.content = content;
        this.linkNumber = linkNumber;
        this.question = question;
    }

}
